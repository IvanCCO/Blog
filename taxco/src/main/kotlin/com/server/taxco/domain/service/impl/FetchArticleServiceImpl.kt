package com.server.taxco.domain.service.impl

import com.server.taxco.application.mapper.ArticleMapper
import com.server.taxco.application.web.response.ArticlePageResponse
import com.server.taxco.application.web.response.ArticleResponse
import com.server.taxco.domain.Exception.ArticleNotFoundException
import com.server.taxco.domain.Exception.ContentNotFoundException
import com.server.taxco.domain.Exception.ImageNotFoundException
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.ArticleRepository
import com.server.taxco.domain.service.FetchArticleService
import com.server.taxco.resources.storage.ObjectType
import com.server.taxco.resources.storage.S3Operation
import org.springframework.stereotype.Service

@Service
class FetchArticleServiceImpl(
    private val repository: ArticleRepository,
    private val mapper: ArticleMapper,
    private val s3Operation: S3Operation
) : FetchArticleService {
    override fun byId(articleId: String): ArticleResponse {
        val id = ArticleId(articleId)
        val article = repository.findById(id) ?: throw ArticleNotFoundException(id)
        return mapper.toResponse(article)
    }

    override fun byPage(page: Int, size: Int): ArticlePageResponse {

        val articlePage = repository.findAll(page, size)

        val articleResponse = articlePage.articles.map { article ->
            mapper.toResponse(article ?: throw ArticleNotFoundException(null))
        }

        return ArticlePageResponse(
            isLastPage = articlePage.isLastPage,
            isFirstPage = articlePage.isFirstPage,
            articles = articleResponse
        )
    }

    override fun image(articleId: String): ByteArray {
        val id = ArticleId(articleId)
        return s3Operation.getObject(id, ObjectType.IMAGE) ?: throw ImageNotFoundException(id)
    }

    override fun content(articleId: String): ByteArray {
        val id = ArticleId(articleId)
        return s3Operation.getObject(id, ObjectType.CONTENT) ?: throw ContentNotFoundException(id)
    }

    override fun last(): ArticleResponse {
        val article = repository.lastArticle() ?: throw ArticleNotFoundException(null)
        return mapper.toResponse(article)
    }
}
