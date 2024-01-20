package com.server.taxco.domain.service.impl

import com.server.taxco.application.web.request.CreatePostRequest
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.Exception.PostAlreadyExistsException
import com.server.taxco.domain.dto.CreatePostDTO
import com.server.taxco.domain.post.Post
import com.server.taxco.domain.post.PostRepository
import com.server.taxco.domain.service.UpdatePostService
import com.server.taxco.resources.storage.S3Service
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile

@Service
class UpdatePostServiceImpl(
    private val repository: PostRepository,
    private val s3Operation : S3Service
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

    // TODO: Arruamar para ter um contrato inves de ter direto o s3
    override fun insertImage(postId: String, file: MultipartFile) {
        s3Operation.putObject("bucket", "/post/$postId/imagem", "uifn".toByteArray())
    }

    override fun insertContent(postId: String, byteArray: MultipartFile) {
        s3Operation.putObject("bucket", "/post/$postId/content", "uifn".toByteArray())
    }

    override fun updateBasicInfo(postId: String, request: CreatePostRequest) {
        s3Operation.getObject("bucket", "post/$postId/content")
    }

    override fun updateImage(postId: String, byteArray: MultipartFile) {
        s3Operation.getObject("bucket", "post/$postId/content")
    }


    override fun updateContent(postId: String, byteArray: MultipartFile) {
        s3Operation.getObject("bucket", "post/$postId/content")
    }
}
