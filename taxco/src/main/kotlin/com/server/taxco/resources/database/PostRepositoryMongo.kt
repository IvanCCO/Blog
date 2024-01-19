package com.server.taxco.resources.database

import com.server.taxco.application.mapper.PostMapper
import com.server.taxco.domain.post.Post
import com.server.taxco.domain.post.PostId
import com.server.taxco.domain.post.PostRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
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

    override fun findAll(pageable: Pageable): Page<PostDocument> {
        val documents = repository.findAll(pageable)
        return documents
    }

    override fun findByTitle(name: String): Post? {
        val document = repository.findByTitle(name)
        return document
    }
}
