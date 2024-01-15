package com.server.taxco.resources

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate

@Document("posts")
data class PostDocument(
    @Id val id: String,
    val title: String,
    val description: String,
    val tag: TagDocument,
    val readTime: Int,
    val isVisible: String,
    val createdAt: LocalDate,
    val updatedAt: LocalDate,
)

data class TagDocument(
    val name: String
)