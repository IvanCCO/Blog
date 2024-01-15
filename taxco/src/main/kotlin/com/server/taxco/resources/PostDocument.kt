package com.server.taxco.resources

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate

@Document("posts")
data class PostDocument(
    @Id val id : String,
    val title : String,
    val description: String,
    val tag : String,
    val readTime : Int,
    val createdAt : LocalDate,
    val updatedAt : LocalDate,
)
