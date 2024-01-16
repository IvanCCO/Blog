package com.server.taxco.application.mapper

import com.server.taxco.common.Mapper
import com.server.taxco.domain.post.Post
import com.server.taxco.domain.post.PostId
import com.server.taxco.domain.post.tag.Tag
import com.server.taxco.domain.post.Visibility
import com.server.taxco.resources.database.PostDocument

@Mapper
class PostDomainMapper {

    fun toDomain(document: PostDocument?) = document?.let {
        Post(
            postId = PostId(it.id),
            title = it.title,
            description = it.description,
            readTime = it.readTime,
            tag = Tag(it.tag.name),
            isVisible = Visibility.valueOf(it.isVisible),
            createdAt = it.createdAt,
            updatedAt = it.updatedAt
        )
    }
}
