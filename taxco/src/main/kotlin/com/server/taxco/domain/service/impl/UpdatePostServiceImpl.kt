package com.server.taxco.domain.service.impl

import com.server.taxco.application.web.request.CreatePostRequest
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.Exception.PostAlreadyExistsException
import com.server.taxco.domain.dto.CreatePostDTO
import com.server.taxco.domain.post.Post
import com.server.taxco.domain.post.PostRepository
import com.server.taxco.domain.service.UpdatePostService
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile

@Service
class UpdatePostServiceImpl(
    private val repository: PostRepository,
) : LoggableClass(), UpdatePostService {


    override fun create(request: CreatePostRequest) {
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

    override fun insertImage(postId: String, file: MultipartFile) {
        TODO("Not yet implemented")
    }

    override fun insertContent(postId: String, byteArray: MultipartFile) {
        TODO("Not yet implemented")
    }


    override fun updateBasicInfo(postId: String, request: CreatePostRequest) {
        TODO("Not yet implemented")
    }

    override fun updateImage(postId: String, byteArray: MultipartFile) {
        TODO("Not yet implemented")
    }

    override fun updateContent(postId: String, byteArray: MultipartFile) {
        TODO("Not yet implemented")
    }

}
