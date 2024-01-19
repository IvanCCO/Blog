package com.server.taxco.domain.dto

data class CreatePostDTO(
    val title: String,
    val description: String,
    val readTime: Int,
    val tagName: String,
)
