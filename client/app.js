import Vue from 'vue';
import moment from 'moment';

// Element UI
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
Vue.use(Element, { locale });

// Swal
import Swal from 'sweetalert2';
Vue.prototype.$swal = Swal;
Vue.prototype.$confirm = function(html) {
    return new Promise((resolve, reject) => {
        Swal.fire({
            title: '',
            html: html,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
        })
        .then((result) => {
            if (result.isConfirmed) {
                resolve(result);
            }
        })
        .catch(err => {
            reject(err);
        });
    });
};

let helper = {
    dateFormat: (value, format='DD/MM/YYYY - HH:mm') => {
        let d = moment(value);
        if (!d.isValid()) return '';
        return d.format(format);
    },

    strFileSize(bytes, dp=0) {
        if (!bytes || isNaN(+bytes)) return '';
        const si = true;
        const thresh = si ? 1000 : 1024;
        if (Math.abs(bytes) < thresh) { return bytes + ' B'; }
        const units = si? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']: ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

        let u = -1;
        const r = 10**dp;

        do { bytes /= thresh; ++u; } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
        return bytes.toFixed(dp) + ' ' + units[u];
    },
};

Vue.prototype.$helper = helper;
for(let name in helper) Vue.filter(name, helper[name]);

Vue.prototype.$log = function() {
    Array.prototype.slice.call(arguments).forEach(item => {
        console.log(item);
    });
};