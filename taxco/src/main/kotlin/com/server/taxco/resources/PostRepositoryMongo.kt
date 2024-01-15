package com.server.taxco.resources

import com.server.taxco.application.mapper.PostMapper
import com.server.taxco.domain.Post
import com.server.taxco.domain.PostId
import com.server.taxco.domain.PostRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Repository

@Repository
class PostRepositoryMongo(
    private val repository: PostRepositorySpring,
    private val mapper: PostMapper
) : PostRepository {

    override fun findById(postId: PostId): Post? {
        val document = repository.findByIdOrNull(postId.value)
        return mapper.toDomain(document)
    }

    override fun save(post: Post) {

        val document = mapper.toDocument(post)

        repository.save(document)
    }
}