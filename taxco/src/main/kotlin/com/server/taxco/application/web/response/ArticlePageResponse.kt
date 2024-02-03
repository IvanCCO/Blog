package com.server.taxco.application.web.response

import com.server.taxco.domain.article.Article

data class ArticlePageResponse(
    val isFirstPage: Boolean,
    val isLastPage: Boolean,
    val articles: List<ArticleResponse?>
)
