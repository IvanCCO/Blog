package com.server.taxco.resources

import com.server.taxco.application.mapper.PostMapper
import com.server.taxco.domain.Post
import com.server.taxco.domain.PostRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
class PostRepositoryMongo(
    private val postRepositorySpring: PostRepositorySpring,
    private val mapper: PostMapper
) : PostRepository {

    override fun findById(id: String): Post? {
        val document = postRepositorySpring.findByIdOrNull(id)
        return mapper.toDomain(document)
    }

    override fun save(post: Post) {


//        postRepositorySpring.save()

    }

}