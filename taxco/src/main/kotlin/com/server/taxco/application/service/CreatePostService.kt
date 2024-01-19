package com.server.taxco.application.service

import com.server.taxco.application.web.request.CreatePostRequest
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.Exception.PostAlreadyExistsException
import com.server.taxco.domain.dto.CreatePostDTO
import com.server.taxco.domain.post.Post
import com.server.taxco.domain.post.PostId
import com.server.taxco.domain.post.PostRepository
import com.server.taxco.domain.post.Visibility
import com.server.taxco.domain.post.tag.Tag
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class CreatePostService(
    private val repository: PostRepository,
) : LoggableClass() {
    fun execute(request: CreatePostRequest) {

        if (repository.findByTitle(request.title) != null) {
            throw PostAlreadyExistsException(request.title)
        }

        val post = Post.of(
            CreatePostDTO(
                title = request.title,
                description = request.description,
                readTime = 10,
                tagName = request.tag
            )
        )

        logInfo("Saving post $post")

        repository.save(post)
    }

}
