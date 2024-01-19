package com.server.taxco.resources.storage

import org.springframework.stereotype.Component
import software.amazon.awssdk.core.ResponseInputStream
import software.amazon.awssdk.core.sync.RequestBody
import software.amazon.awssdk.services.s3.S3Client
import software.amazon.awssdk.services.s3.model.GetObjectRequest
import software.amazon.awssdk.services.s3.model.GetObjectResponse
import software.amazon.awssdk.services.s3.model.PutObjectRequest
import java.io.IOException

@Component
class S3Service(
    private val s3Client: S3Client
) {
    fun putObject(
        bucketName: String,
        key: String,
        file: ByteArray
    ) {
        val objectRequest: PutObjectRequest = PutObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build()
        s3Client.putObject(objectRequest, RequestBody.fromBytes(file))
    }

    fun getObject(
        bucketName: String,
        key: String
    ): ByteArray {

        val getObjectRequest: GetObjectRequest = GetObjectRequest.builder()
            .bucket(bucketName)
            .key(key)
            .build()

        val response: ResponseInputStream<GetObjectResponse> = s3Client.getObject(getObjectRequest)

        try {
            return response.readAllBytes()
        } catch (ex: IOException) {
            throw ex
        }
    }
}
