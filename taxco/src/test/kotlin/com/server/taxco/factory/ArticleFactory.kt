package com.server.taxco.factory

import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.Visibility
import com.server.taxco.domain.article.tag.Tag
import java.time.LocalDateTime
import java.time.LocalDateTime.now

object ArticleFactory {
    fun sample(
        id: ArticleId = ArticleId("article_id"),
        title: String = "I am a title",
        description: String = "I am a description",
        readTime: Int = 10,
        tag: Tag = TagFactory.sample(),
        isVisible: Visibility = Visibility.PUBLIC,
        image: String = "/path/image",
        content: String = "/path/content",
        createdAt: LocalDateTime = now(),
        updatedAt: LocalDateTime = now()
    ) = Article(
        id = id,
        title = title,
        description = description,
        readTime = readTime,
        tag = tag,
        isVisible = isVisible,
        image = image,
        content = content,
        createdAt = createdAt,
        updatedAt = updatedAt
    )
}
