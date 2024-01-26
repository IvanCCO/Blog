package com.server.taxco.mapper

import com.server.taxco.application.mapper.ArticleDocumentMapper
import com.server.taxco.application.mapper.ArticleDomainMapper
import com.server.taxco.application.mapper.ArticleMapper
import com.server.taxco.application.mapper.ArticleResponseMapper
import com.server.taxco.domain.article.Article
import com.server.taxco.factory.ArticleDocumentFactory
import com.server.taxco.factory.ArticleFactory
import io.mockk.clearAllMocks
import org.junit.jupiter.api.Assertions.assertAll
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class ArticleMapperTest {

    private val domainMapper: ArticleDomainMapper = ArticleDomainMapper()
    private val documentMapper: ArticleDocumentMapper = ArticleDocumentMapper()
    private val responseMapper: ArticleResponseMapper = ArticleResponseMapper()

    private val mapper: ArticleMapper = ArticleMapper(
        domainMapper,
        responseMapper,
        documentMapper
    )

    @BeforeEach
    fun init() {
        clearAllMocks()
    }

    @Test
    fun `Given a article document should map to a domain Article`() {

        val document = ArticleDocumentFactory.sample()

        val result = this.mapper.toDomain(document)!!

        assertAll(
            "Assert that all fields are equal",
            { assertEquals(document.id, result.id.value) },
            { assertEquals(document.title, result.title) },
            { assertEquals(document.description, result.description) },
            { assertEquals(document.isVisible, result.isVisible.name) },
            { assertEquals(document.tag.name, result.tag.name) },
            { assertEquals(document.imagePath, result.image) },
            { assertEquals(document.contentPath, result.content) },
            { assertEquals(document.updatedAt, result.updatedAt) },
            { assertEquals(document.createdAt, result.createdAt) },
        )
    }

    @Test
    fun `Given a domain article it should map to a document article`() {

        val article = ArticleFactory.sample()

        val result = this.mapper.toDocument(article)

        assertAll(
            "Assert that all fields are equal",
            { assertEquals(article.id.value, result.id) },
            { assertEquals(article.title, result.title) },
            { assertEquals(article.description, result.description) },
            { assertEquals(article.isVisible.name, result.isVisible) },
            { assertEquals(article.tag.name, result.tag.name) },
            { assertEquals(article.image, result.imagePath) },
            { assertEquals(article.content, result.contentPath) },
            { assertEquals(article.updatedAt, result.updatedAt) },
            { assertEquals(article.createdAt, result.createdAt) },
        )
    }

    @Test
    fun `Given a domain article it should map to a response article`() {

        val article: Article = ArticleFactory.sample()

        val result = this.mapper.toResponse(article)

        assertAll(
            "Assert that all fields are equal",
            { assertEquals(article.id.value, result.id) },
            { assertEquals(article.title, result.title) },
            { assertEquals(article.description, result.description) },
            { assertEquals(article.tag.name, result.tag) },
            { assertEquals(article.createdAt, result.createdAt) },
        )
    }
}
