package com.server.taxco.mapper

import com.server.taxco.application.mapper.ArticleDomainMapper
import com.server.taxco.factory.ArticleDocumentFactory
import io.mockk.clearAllMocks
import org.junit.jupiter.api.Assertions.assertAll
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class ArticleDomainMapperTest {

    private val mapper: ArticleDomainMapper = ArticleDomainMapper()

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
}