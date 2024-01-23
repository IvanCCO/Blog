package com.server.taxco.domain.dto

data class CreateArticleDTO(
    val title: String,
    val description: String,
    val tagName: String,
)
