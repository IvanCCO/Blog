package com.server.taxco.mapper

import com.server.taxco.application.mapper.ArticleDocumentMapper
import com.server.taxco.factory.ArticleFactory
import io.mockk.clearAllMocks
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertAll

internal class ArticleDocumentMapperTest {

    private val mapper: ArticleDocumentMapper = ArticleDocumentMapper()

    @BeforeEach
    fun init() {
        clearAllMocks()
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
}
