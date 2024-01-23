package com.server.taxco.factory

import com.server.taxco.domain.article.Article
import com.server.taxco.domain.article.ArticleId
import com.server.taxco.domain.article.Visibility
import com.server.taxco.domain.article.tag.Tag
import com.server.taxco.resources.database.ArticleDocument
import com.server.taxco.resources.database.TagDocument
import java.time.LocalDateTime

object ArticleDocumentFactory {
    fun sample(
        id: String = "article_id",
        title: String = "I am a title",
        description: String = "I am a description",
        readTime: Int = 10,
        tag: TagDocument = TagDocumentFactory.sample(),
        isVisible: String = Visibility.PUBLIC.name,
        image: String = "/path/image",
        content: String = "/path/content",
        createdAt: LocalDateTime = LocalDateTime.now(),
        updatedAt: LocalDateTime = LocalDateTime.now()
    ) = ArticleDocument(
        id = id,
        title = title,
        description = description,
        readTime = readTime,
        tag = tag,
        isVisible = isVisible,
        imagePath = image,
        contentPath = content,
        createdAt = createdAt,
        updatedAt = updatedAt
    )
}