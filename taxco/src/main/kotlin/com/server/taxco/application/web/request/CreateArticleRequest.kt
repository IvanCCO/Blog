package com.server.taxco.application.web.request

data class CreateArticleRequest(
    val title: String,
    val description: String,
    val tag: String
)
