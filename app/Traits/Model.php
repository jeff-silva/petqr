<?php

namespace App\Traits;

trait Model
{
    public static function bootModel() {
        static::saving(function($model) {
            $validate = $model->validate();

            if ($validate->fails()) {
                throw new \Exception(json_encode($validate->errors()));
            }

            // Gerando slug caso coluna exista
            if (in_array('slug', $model->getFillable()) AND !$model->slug) {
                $model->slug = $model->slugify();
            }

            return $model;
        });
    }


    public function validationRules() {
        return ['name' => 'required'];
    }
    

    public function validate($data=null) {
        $data = $data===null? $this->attributes: $data;
        return \Validator::make($data, $this->validationRules());
    }


    public function slugify() {
        return \Str::slug($this->name);
    }


    public function clone() {
        // 
    }


    public function import($format, $content) {
        // 
    }


    public function scopeFindIdOrSlug($query, $slugid)
    {
        $fillable = $this->fillable;
        $query->where(function($q) use($slugid, $fillable) {
            $q->where('id', $slugid);

            if (in_array('slug', $fillable)) {
                $q->orWhere('slug', $slugid);
            }
        });

        return $query->first();
    }


    public function scopeExport($query) {
        $format = request('format', 'json');
        $filename = uniqid('download-'). ".{$format}";
        $mime = "application/{$format}";
        $all = $query->get()->toArray();

        if ($format=='csv') {
            $f = fopen('php://memory', 'r+');
            foreach ($all as $item) { fputcsv($f, $item, ';'); }
            rewind($f);
            $content = stream_get_contents($f);
        }

        else if ($format=='html') {
            $mime = 'text/html';
            $content = '<!DOCTYPE html><html lang="en"><head><title>'. $format .' export</title>';
            $content .= '<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge">';
            $content .= '<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>';
            $content .= '<body><table><thead>';
            foreach($all as $line=>$cols) {
                if ($line==0) {
                    $content .= '<thead><tr>';
                    foreach($cols as $name=>$value) { $content .= '<th>'. $name .'</th>'; }
                    $content .= '<tr></thead><tbody>';
                }

                $content .= '<tr>';
                foreach($cols as $name=>$value) { $content .= '<td>'. $value .'</td>'; }
                $content .= '</tr>';
                if ($line==sizeof($all)-1) { $content .= '</tbody>'; }
            }
            $content .= '</table></body></html>';
        }

        else {
            $content = json_encode($all);
        }

        return \Response::make($content, 200, [
            'Content-type' => $mime,
            'Content-Disposition' => "attachment; filename=\"{$filename}\"",
        ]);
    }


    public function scopeDeleteAll($query, $params=null) {
        $params = $params===null? request()->all(): $params;
        $params = (object) array_merge([
            'forced' => '',
        ], $params);
        
        $return = [];
        $items = $query->get();

        if (\Schema::hasColumn($this->getTable(), 'deleted_at')) {
            foreach($items as $item) {
                if ($params->forced) {
                    $item->delete();
                    $return[] = $item;
                    continue;
                }

                $item->deleted_at = date('Y-m-d H:i:s');
                $item->save();
                $return[] = $item;
            }
        }

        return $return;
    }


    public function scopeRestoreAll($query)
    {
        $return = [];
        foreach($query->get() as $item) {
            $item->deleted_at = null;
            $item->save();
            $return[] = $item;
        }
        return $return;
    }

    public function scopeWhereDeleted($query, $deleted=true) {
        if (!in_array('deleted_at', $this->fillable)) return;

        if ($deleted) {
            $query->where(function($q) {
                $q->whereNotNull('deleted_at');
                $q->orWhere('deleted_at', '!=', '');
            });
        }
        else {
            $query->where(function($q) {
                $q->whereNull('deleted_at');
                $q->orWhere('deleted_at', '');
            });
        }

        return $query;
    }


    public function scopeSelectExcept($query, $fields=[]) {
        $select = [];
        foreach($this->fillable as $col) {
            if (in_array($col, $fields)) continue;
            $select[] = $col;
        }
        return $query->select($select);
    }
    

    public function searchParams() {
        return [];
    }


    public function searchQuery($query) {
        return $query;
    }


    public function scopeSearch($query, $params=null) {
        $params = $params? $params: request()->all();
        $params = array_merge([
            'q' => '',
            'page' => 1,
            'perpage' => 20,
            'orderby' => 'updated_at',
            'order' => 'desc',
            'deleted' => '',
            'limit' => '',
        ], $this->searchParams(), $params);

        foreach($params as $field=>$value) {
            if (! $value) continue;
            if (! in_array($field, $this->fillable)) continue;

            $operator = isset($params["{$field}_op"])? $params["{$field}_op"]: false;

            // ?status[]=progress&term[]=payment
            // where status in ('progress', 'payment')
            if (is_array($value)) {
                $query->whereIn($field, $value);
            }

            // ?price=1000&price_op=lt
            // where price < 1000
            else if ($operator=='lt') {
                $query->where($field, '<', $value);
            }
            
            // ?price=1000&price_op=lte
            // where price <= 1000
            else if ($operator=='lte') {
                $query->where($field, '<=', $value);
            }

            // ?price=1000&price_op=gt
            // where price > 1000
            else if ($operator=='gt') {
                $query->where($field, '>', $value);
            }

            // ?price=1000&price_op=gte
            // where price >= 1000
            else if ($operator=='gte') {
                $query->where($field, '>=', $value);
            }

            // ?status=finished&status_op=neq
            // where status != 'finished'
            else if ($operator=='neq') {
                $query->where($field, '!=', $value);
            }

            // ?title=search&title_op=like
            // where title like '%search%'
            else if ($operator=='like') {
                $query->where($field, 'like', "%{$value}%");
            }

            // ?title=search&title_op=nlike
            // where title not like '%search%'
            else if ($operator=='nlike') {
                $query->where($field, 'not like', "%{$value}%");
            }

            // ?stars[]=3&stars[]=4&stars_op=between
            // where stars between(3, 4)
            else if ($operator=='between') {
                $query->whereBetween($field, $value);
            }

            // ?stars[]=3&stars[]=4&stars_op=nbetween
            // where stars not between(3, 4)
            else if ($operator=='nbetween') {
                $query->whereNotBetween($field, $value);
            }

            // ?status=finished
            // where status='finished'
            else {
                $query->where($field, $value);
            }
        }

        // ?orderby=id&order=desc
        $query->orderBy($params['orderby'], $params['order']);

        // ?q=term+search
        if ($params['q']) {
            $terms = preg_split('/[^a-zA-Z0-9]/', $params['q']);
            $whereLikes = [];
            foreach($terms as $q) {
                foreach($this->fillable as $field) {
                    $whereLikes[] = [$field, 'like', "%{$q}%"];
                }
            }
            $query = $query->where(function($q) use($whereLikes) {
                foreach($whereLikes as $w) {
                    $q->orWhere($w[0], $w[1], $w[2]);
                }
            });
        }

        // ?deleted=1
        $query->whereDeleted($params['deleted']);

        // ?limit=3
        if ($params['limit']) {
            $query->limit($params['limit']);
        }

        return $query;
    }



    public static function scopeToRawSql($query)
    {
        $sqlQuery = \Str::replaceArray(
        '?',
        collect($query->getBindings())
            ->map(function ($i) {
            if (is_object($i)) {
                $i = (string)$i;
            }
            return (is_string($i)) ? "'$i'" : $i;
            })->all(),
        $query->toSql()
        );

        return $sqlQuery;
    }
}