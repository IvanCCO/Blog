package com.server.taxco.application.mapper

import com.server.taxco.common.Mapper
import com.server.taxco.domain.Post
import com.server.taxco.resources.PostDocument

@Mapper
class PostMapper(
    private val domainMapper: PostDomainMapper,
    private val responseMapper: PostResponseMapper
) {

    fun toDomain(document : PostDocument?) = domainMapper.toDomain(document)
    fun toResponse(post : Post?) = responseMapper.toResponse(post)


}