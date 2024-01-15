package com.server.taxco.application.service

import com.server.taxco.application.request.CreatePostRequest
import com.server.taxco.domain.Post
import com.server.taxco.domain.PostId
import com.server.taxco.domain.PostRepository
import com.server.taxco.domain.Tag
import com.server.taxco.domain.Visibility
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class CreatePostService(
    private val repository: PostRepository,
) {
    fun execute(request: CreatePostRequest) {

        // TODO: Get the post with same title and throw if exists
        val post = Post(
            postId = PostId(),
            title = request.title,
            description = request.description,
            readTime = 10,
            tag = Tag(
                name = request.tag
            ),
            isVisible = Visibility.PUBLIC,
            createdAt = LocalDate.now(),
            updatedAt = LocalDate.now()
        )

        repository.save(post)
    }
}
