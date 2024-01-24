import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.2.1"
    id("io.spring.dependency-management") version "1.1.4"
    kotlin("jvm") version "1.9.21"
    kotlin("plugin.spring") version "1.9.21"
    id("org.jlleitschuh.gradle.ktlint") version "10.2.1"
    jacoco
}

group = "com.server"
version = "0.0.1-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_17
}

val excludedPackages: Iterable<String> = listOf(
    "**/com/server/taxco/TaxcoAppliaction**",
    "**/com/server/taxco/application/config/**",
    "**/com/server/taxco/application/web/controller/ErrorHandler**/",
    "**/com/server/taxco/application/web/controller/request/**",
    "**/com/server/taxco/application/web/controller/response/**",
    "**/com/server/taxco/domain/exception/**",
)

extra["excludedPackages"] = excludedPackages

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-mongodb")
    // TODO: Active security
// 	implementation("org.springframework.boot:spring-boot-starter-security")
// 	implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
// 	testImplementation("org.springframework.security:spring-security-test")

    // ULID Generator
    implementation("com.github.f4b6a3:ulid-creator:5.2.3")

    // Cloud Provider & Services
    implementation(platform("software.amazon.awssdk:bom:2.23.3"))
    implementation("software.amazon.awssdk:s3")

    // Logging
    compileOnly("org.projectlombok:lombok:1.18.30")

    // TESTS
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("io.mockk:mockk:1.10.2")
    testImplementation(kotlin("test-junit5"))
    testImplementation("org.junit.jupiter:junit-jupiter:5.9.2")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs += "-Xjsr305=strict"
        jvmTarget = "17"
    }
}

tasks.withType<Test> {
    loadEnv(environment, file("variables.test.env"))
    useJUnitPlatform()
    finalizedBy("jacocoTestCoverageVerification")
}

tasks.withType<org.springframework.boot.gradle.tasks.run.BootRun> {
    loadEnv(environment, file("variables.test.env"))
}

fun loadEnv(enviroment: MutableMap<String, Any>, file: File) {
    if (!file.exists()) throw IllegalArgumentException("failed to load envs from file, ${file.name} not found")

    // Read the env file
    file.readLines().forEach { line ->
        if (line.isBlank() || line.startsWith("#")) return@forEach
        line.split("=", limit = 2)
            .takeIf { it.size == 2 && it[0].isNotBlank() }
            ?.run { Pair(this[0].trim(), this[1].trim()) }
            ?.run {
                enviroment[this.first] = this.second
            }
    }
}

tasks.check {
    dependsOn(
        "test", "jacocoTestReport", "jacocoTestCoverageVerification", "ktlintCheck"
    )
}

tasks.test {
//    finalizedBy("check")
}

jacoco { toolVersion = "0.8.7" }

tasks.jacocoTestReport {
    tasks.jacocoTestReport {
        dependsOn(tasks.test)
    }
    reports {
        xml.required.set(true)
        html.required.set(true)
    }
    classDirectories.setFrom(
        sourceSets.main.get().output.asFileTree.matching {
            exclude(excludedPackages)
        }
    )
}

tasks.jacocoTestCoverageVerification {
//    dependsOn(tasks.jacocoTestReport, tasks.jacocoTestReport)
    violationRules {
        rule {
            limit {
                minimum = 0.7.toBigDecimal()
            }
        }
        rule {
            isEnabled = false
            element = "CLASS"
            includes = listOf("org.gradle.*")
            limit {
                counter = "LINE"
                value = "TOTALCOUNT"
                maximum = 0.3.toBigDecimal()
            }
        }
    }
}

springBoot { buildInfo() }
