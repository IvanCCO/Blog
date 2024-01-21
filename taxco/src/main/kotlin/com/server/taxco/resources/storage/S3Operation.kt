package com.server.taxco.resources.storage

import com.server.taxco.application.config.BucketsProperties
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
) {
    fun putObject(
        articleId: String,
        file: ByteArray,
        objectType: ObjectType
    ) {
        val objectRequest: PutObjectRequest = PutObjectRequest.builder()
            .bucket(bucketsProperties.articleBucket)
            .key(choosePath(articleId,objectType))
            .build()
        s3Client.putObject(objectRequest, RequestBody.fromBytes(file))
    }

    fun getObject(
        articleId: String,
        objectType: ObjectType
    ): ByteArray {

        val getObjectRequest: GetObjectRequest = GetObjectRequest.builder()
            .bucket(bucketsProperties.articleBucket)
            .key(choosePath(articleId,objectType))
            .build()

        val response: ResponseInputStream<GetObjectResponse> = s3Client.getObject(getObjectRequest)

        try {
            return response.readAllBytes()
        } catch (ex: IOException) {
            throw ex
        }
    }
    private fun choosePath(articleId : String, objectType: ObjectType) = when(objectType){
        ObjectType.IMAGE -> "$PREFIX_PATH/$articleId/image"
        ObjectType.CONTENT -> "$PREFIX_PATH/$articleId/content"
    }
    companion object{
        const val PREFIX_PATH = "article"
    }
}
