package com.server.taxco.domain.service

import com.server.taxco.application.web.response.ArticlePageResponse
import com.server.taxco.application.web.response.ArticleResponse
import com.server.taxco.domain.article.dto.ArticlePageDTO
import com.server.taxco.resources.database.ArticleDocument
import org.springframework.data.domain.Page

/**
 * I know that's not a good convention to use verbs on class names, but I just like that way
 */
interface FetchArticleService {
    fun byId(articleId: String): ArticleResponse
    fun byPage(page: Int, size: Int): ArticlePageResponse
    fun last(): ArticleResponse
    fun image(articleId: String): ByteArray
    fun content(articleId: String): ByteArray
}
