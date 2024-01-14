package com.server.taxco.application.request

data class createPostRequest(
    val title: String,
    val description : String,
    val tag : String
)

data class createTagRequest(
    val category : String,
    val color : String
)