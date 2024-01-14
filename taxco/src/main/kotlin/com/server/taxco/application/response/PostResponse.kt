package com.server.taxco.application.response

import java.time.LocalDate

data class PostResponse(
    val id : Int,
    val title : String,
    val description : String,
    val readTime: Int,
    val createdAt : LocalDate,
    val updatedAt : LocalDate,
)
