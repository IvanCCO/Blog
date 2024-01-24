package com.server.taxco.mapper

import com.server.taxco.application.mapper.ArticleResponseMapper
import com.server.taxco.domain.article.Article
import com.server.taxco.factory.ArticleFactory
import io.mockk.clearAllMocks
import org.junit.jupiter.api.Assertions.assertAll
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class ArticleResponseMapperTest {

    private val mapper: ArticleResponseMapper = ArticleResponseMapper()

    @BeforeEach
    fun init() {
        clearAllMocks()
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