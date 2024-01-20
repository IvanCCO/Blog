package com.server.taxco.application.web.response

import java.time.LocalDate

data class ArticleResponse(
    val id: String,
    val title: String,
    val description: String,
    val readTime: Int,
    val tag: String,
    val createdAt: LocalDate,
)
