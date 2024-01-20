package com.server.taxco.application.web.controller

import com.server.taxco.application.web.request.CreateArticleRequest
import com.server.taxco.application.web.response.ArticleResponse
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.article.Article
import com.server.taxco.domain.service.FetchArticleService
import com.server.taxco.domain.service.UpdateArticleService
import com.server.taxco.resources.database.ArticleDocument
import org.springframework.data.domain.Page
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("article")
class ArticleController(
    private val createArticle: UpdateArticleService,
    private val fetchArticle: FetchArticleService,
) : LoggableClass() {

    @PostMapping
    fun createArticle(
        @RequestBody createArticleRequest: CreateArticleRequest
    ): ResponseEntity<Article> {
        logInfo("Request to create Article received with title ${createArticleRequest.title}")
        createArticle.create(createArticleRequest)
        return ResponseEntity.status(HttpStatus.CREATED).build()
    }

    @GetMapping("{articleId}")
    fun getArticleById(
        @PathVariable articleId: String
    ): ResponseEntity<ArticleResponse> {
        logInfo("Request to fetch Article with id: $articleId received")
        val response = fetchArticle.byId(articleId)
        return ResponseEntity.ok(response)
    }

    @GetMapping
    fun getArticleById(
        @RequestParam("page") page: Int,
        @RequestParam("size") size: Int,
    ): ResponseEntity<Page<ArticleDocument>> {
        val response = fetchArticle.byPage(page, size)
        return ResponseEntity.ok(response)
    }

    // TODO: Retornar um array talvez eu consigo retornar tudo em 1 só endpoint -> Na verdade não sei se isso é bom? kk
    @GetMapping(
        value = ["{articleId}/image"],
        produces = [MediaType.IMAGE_JPEG_VALUE]
    )
    fun findArticleImage(
        @PathVariable articleId: String
    ): ResponseEntity<ByteArray> {
        val response = fetchArticle.image(articleId)
        return ResponseEntity.ok(response)
    }

    @PostMapping(
        value = ["{articleId}/image"],
        consumes = [MediaType.MULTIPART_FORM_DATA_VALUE]
    )
    fun addArticleImage(
        @PathVariable articleId: String,
        @RequestParam("file", required = true) file: MultipartFile
    ): ResponseEntity<Unit> {
        val response = createArticle.insertImage(articleId, file)
        return ResponseEntity.ok().build()
    }
}
