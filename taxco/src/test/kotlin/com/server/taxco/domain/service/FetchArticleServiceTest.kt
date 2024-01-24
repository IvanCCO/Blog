package com.server.taxco.domain.service

import com.server.taxco.application.mapper.ArticleDocumentMapper
import com.server.taxco.application.mapper.ArticleDomainMapper
import com.server.taxco.application.mapper.ArticleMapper
import com.server.taxco.application.mapper.ArticleResponseMapper
import com.server.taxco.domain.Exception.ArticleNotFoundException
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.ArticleRepository
import com.server.taxco.domain.service.impl.FetchArticleServiceImpl
import com.server.taxco.factory.ArticleFactory
import com.server.taxco.resources.storage.S3Operation
import io.mockk.clearAllMocks
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import kotlin.test.DefaultAsserter.assertEquals
import kotlin.test.assertEquals

internal class FetchArticleServiceTest {

    // Mapper
    private val domainMapper: ArticleDomainMapper = ArticleDomainMapper()
    private val documentMapper: ArticleDocumentMapper = ArticleDocumentMapper()
    private val responseMapper: ArticleResponseMapper = ArticleResponseMapper()
    private val mapper: ArticleMapper = ArticleMapper(
        domainMapper,
        responseMapper,
        documentMapper
    )

    private val repository: ArticleRepository = mockk()
    private val s3Operation: S3Operation = mockk()

    private val fetchArticle: FetchArticleService = FetchArticleServiceImpl(
        repository,
        mapper,
        s3Operation
    )

    @BeforeEach
    fun init() {
        clearAllMocks()
    }

    @Test
    fun `test byId method with existing article`() {

        val articleId = "123"

        val article = ArticleFactory.sample()

        every { repository.findById(ArticleId(articleId)) } returns article

        val result = fetchArticle.byId(articleId)

        verify(exactly = 1) {
            repository.findById(ArticleId(articleId))
            mapper.toResponse(article)
        }

        assertAll(
            "Assert that all fields are equal",
            { assertEquals(result.id, article.id.value) },
            { assertEquals(result.title, article.title) },
            { assertEquals(result.description, article.description) },
            { assertEquals(result.tag, article.tag.name) },
            { assertEquals(result.createdAt, result.createdAt) },
        )
    }

    @Test
    fun `test byId method with non-existing article`() {

        val articleId = "456"

        every {
            repository.findById(ArticleId(articleId))
        } returns null

        assertThrows<ArticleNotFoundException> {
            fetchArticle.byId(articleId)
        }

        verify(exactly = 1) {
            repository.findById(ArticleId(articleId))
        }

    }



}