package com.server.taxco.domain.service

import com.server.taxco.application.web.response.ArticleResponse
import com.server.taxco.resources.database.ArticleDocument
import org.springframework.data.domain.Page

/**
 * I know that's not a good convention to use verbs on class names but i just like that way
 */
interface FetchArticleService {
    fun byId(articleId: String): ArticleResponse
    fun byPage(page: Int, size: Int): Page<ArticleDocument>
    fun image(articleId: String): ByteArray
}
