package com.server.taxco.domain.article.dto

import com.server.taxco.domain.article.Article

data class ArticlePageDTO(
    val isFirstPage: Boolean,
    val isLastPage: Boolean,
    val articles: List<Article?>
)
