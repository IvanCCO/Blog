package com.server.taxco.domain.dto

data class CreateArticleDTO(
    val title: String,
    val description: String,
    val readTime: Int,
    val tagName: String,
)
