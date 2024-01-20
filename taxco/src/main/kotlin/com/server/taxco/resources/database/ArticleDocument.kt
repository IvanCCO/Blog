package com.server.taxco.resources.database

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate
import java.time.LocalDateTime

@Document("article")
data class ArticleDocument(
    @Id val id: String,
    val title: String,
    val description: String,
    val tag: TagDocument,
    val readTime: Int,
    val isVisible: String,
    val createdAt: LocalDateTime,
    val updatedAt: LocalDateTime
)

data class TagDocument(
    val name: String
)
