package com.server.taxco.application.mapper

import com.server.taxco.common.Mapper
import com.server.taxco.domain.post.Post
import com.server.taxco.resources.database.PostDocument
import com.server.taxco.resources.database.TagDocument

@Mapper
class PostDocumentMapper {

    fun toDocument(post: Post) = post.let {
        PostDocument(
            id = it.postId.value,
            title = it.title,
            description = it.description,
            tag = TagDocument(it.tag.name),
            readTime = it.readTime,
            isVisible = it.isVisible.name,
            createdAt = it.createdAt,
            updatedAt = it.updatedAt
        )
    }
}
