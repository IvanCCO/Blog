package com.server.taxco.application.mapper

import com.server.taxco.common.Mapper
import com.server.taxco.domain.Post
import com.server.taxco.resources.PostDocument

@Mapper
class PostDomainMapper {

    fun toDomain(document : PostDocument?) = document?.let {
        Post(
            id = it.id,
            title = it.title,
            description = it.description,
            readTime = it.readTime,
            tag = it.tag,
            createdAt = it.createdAt,
            updatedAt = it.updatedAt
        )
    }


}