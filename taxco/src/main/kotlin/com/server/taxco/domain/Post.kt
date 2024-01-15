package com.server.taxco.domain

import java.time.LocalDate

class Post (
    val id: String,
    val title : String,
    val description : String,
    val readTime : Int,
    val tag : String,
    val createdAt : LocalDate,
    val updatedAt : LocalDate,
)