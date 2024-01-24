package com.server.taxco.domain.service

import com.server.taxco.application.config.ReadTimeProperties
import com.server.taxco.domain.Exception.ArticleAlreadyExistsException
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleRepository
import com.server.taxco.domain.service.impl.UpdateArticleServiceImpl
import com.server.taxco.factory.ArticleFactory
import com.server.taxco.factory.CreateArticleRequestFactory
import com.server.taxco.resources.storage.S3Operation
import io.mockk.every
import io.mockk.mockk
import io.mockk.runs
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertAll
import org.junit.jupiter.api.assertThrows
import org.mockito.ArgumentMatchers.any
import kotlin.test.assertEquals
import kotlin.test.asserter

internal class UpdateArticleServiceTest {

    private val repository: ArticleRepository = mockk()
    private val s3Operation: S3Operation = mockk()
    private val readTimeProperties: ReadTimeProperties = mockk()

    private val service: UpdateArticleService = UpdateArticleServiceImpl(
        repository,
        s3Operation,
        readTimeProperties
    )

    @Test
    fun `should not create a article if exists by title`() {

        val request = CreateArticleRequestFactory.sample()

        every {
            repository.findByTitle(request.title)
        } returns ArticleFactory.sample()

        assertThrows<ArticleAlreadyExistsException> {
            this.service.create(request)
        }

    }

    @Test
    fun `should allow make a article with emojis`() {

        val request = CreateArticleRequestFactory.sample(
            title = "\uD83D\uDE37",
            description = "\uD83E\uDD6D",
            tag = "\uD83E\uDDF5"
        )

        val article = Article.of(request)

        every {
            repository.findByTitle(request.title)
        }
        every {
            repository.save(article)
        } returns article


        assertAll(
            "Mapping all fields of request to article",
            { assertEquals(request.title, article.title) },
            { assertEquals(request.description, article.description) },
            { assertEquals(request.tag, article.tag.name) },
        )

    }
}


