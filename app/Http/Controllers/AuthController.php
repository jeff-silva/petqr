<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', [
            'except' => ['login', 'register', 'passwordResetStart', 'passwordResetChange'],
        ]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    public function register() {
        return \App\Models\User::create(request()->all());
    }

    public function passwordResetStart() {
        $valid = \Validator::make(request()->all(), [
            'email' => ['required', 'email'],
        ]);

        if ($valid->fails()) { throw new \Exception(json_encode($valid->errors())); }
        $user = \App\Models\User::where('email', request('email'))->first();
        if (! $user) throw new \Exception('Usu??rio n??o encontrado');
        return $user->passwordResetStart();
    }

    public function passwordResetChange() {
        $user = \App\Models\User::where([
            'email' => request('email'),
            'remember_token' => request('token'),
        ])->first();

        if (! $user) throw new \Exception('Usu??rio n??o encontrado ou token incorreto');
        $user->remember_token = null;
        $user->password = request('password');
        $user->save();

        return $user;
    }
}