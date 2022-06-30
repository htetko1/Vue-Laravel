<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/get_all_product',[\App\Http\Controllers\ProductController::class,'get_all_product']);

Route::post('/add_product',[\App\Http\Controllers\ProductController::class,"add_product"]);

Route::get('/get_edit_product/{id}',[\App\Http\Controllers\ProductController::class,"get_edit_product"]);

Route::post('/update_product/{id}',[\App\Http\Controllers\ProductController::class,"update_product"]);

Route::get('/delete_product/{id}',[\App\Http\Controllers\ProductController::class,"delete_product"]);
