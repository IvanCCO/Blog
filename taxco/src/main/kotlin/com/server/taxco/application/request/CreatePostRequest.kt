package com.server.taxco.application.request

data class CreatePostRequest(
    val title: String,
    val description: String,
    val tag: String
)
