package com.server.taxco.resources.storage

import com.server.taxco.application.config.BucketsProperties
import com.server.taxco.common.LoggableClass
import com.server.taxco.domain.article.ArticleId
import org.springframework.stereotype.Component
import software.amazon.awssdk.core.ResponseInputStream
import software.amazon.awssdk.core.sync.RequestBody
import software.amazon.awssdk.services.s3.S3Client
import software.amazon.awssdk.services.s3.model.GetObjectRequest
import software.amazon.awssdk.services.s3.model.GetObjectResponse
import software.amazon.awssdk.services.s3.model.PutObjectRequest
import java.io.IOException

@Component
class S3Operation(
    private val s3Client: S3Client,
    private val bucketsProperties: BucketsProperties
) : LoggableClass() {
    fun putObject(
        articleId: ArticleId,
        file: ByteArray,
        objectType: ObjectType
    ) {
        val path = choosePath(articleId.value, objectType)
        val objectRequest: PutObjectRequest = PutObjectRequest.builder()
            .bucket(bucketsProperties.articleBucket)
            .key(path)
            .build()
        logInfo("Send object to s3 storage with path $path")
        s3Client.putObject(objectRequest, RequestBody.fromBytes(file))
    }
    fun getObject(
        articleId: ArticleId,
        objectType: ObjectType
    ): ByteArray? {
        val path = choosePath(articleId.value, objectType)
        val getObjectRequest: GetObjectRequest = GetObjectRequest.builder()
            .bucket(bucketsProperties.articleBucket)
            .key(path)
            .build()
        logInfo("Get object to s3 storage with path $path")
        val response: ResponseInputStream<GetObjectResponse> = s3Client.getObject(getObjectRequest)
        return try {
            response.readAllBytes()
        } catch (ex: IOException) {
            logError("Was not possible to get image from s3 with path $path")
            null
        }
    }

    private fun choosePath(articleId: String, objectType: ObjectType) = when (objectType) {
        ObjectType.IMAGE -> "$PREFIX_PATH/$articleId/image"
        ObjectType.CONTENT -> "$PREFIX_PATH/$articleId/content"
    }
    companion object {
        const val PREFIX_PATH = "article"
    }
}
