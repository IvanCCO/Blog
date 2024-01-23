package com.server.taxco.application.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import org.springframework.context.annotation.Profile
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.s3.S3Client
import java.net.URI

/*
    All this configuration is fake for now
    I have to make more configurations for s3 to work better
 */
@Configuration
class S3Config(
    private val awsProperties: AwsProperties
) {
    @Bean
    @Primary
    @Profile("localstack")
    fun s3client(): S3Client {
        return S3Client.builder()
            .region(Region.US_EAST_2)
            .endpointOverride(URI.create("http://localhost:4566"))
            .forcePathStyle(true)
            .build()
    }

    @Bean
    @Primary
    @Profile("!localstack")
    fun s3ClientCloud(): S3Client {
        return S3Client.builder()
            .region(Region.US_EAST_2)
            .forcePathStyle(true)
            .build()
    }
}
