package com.server.taxco.application.service

import com.server.taxco.application.request.CreatePostRequest
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
