# 图片缺失检测脚本
# 执行：PowerShell -ExecutionPolicy Bypass -File check-images.ps1

Write-Host "=== 作品集图片状态检查 ===" -ForegroundColor Cyan
Write-Host "检查目录：assets/images/"`n

$required = @(
    "hero.jpg",
    "about.jpg",
    "project-01-cover.jpg",
    "project-01-01.jpg",
    "project-01-02.jpg"
)

$optional = @(
    "project-01-03.jpg",
    "project-01-04.jpg",
    "project-02-cover.jpg",
    "project-02-01.jpg",
    "project-02-02.jpg",
    "project-02-03.jpg",
    "project-03-cover.jpg",
    "project-03-01.jpg",
    "project-03-02.jpg",
    "project-04-cover.jpg",
    "project-04-01.jpg",
    "project-04-02.jpg",
    "project-05-cover.jpg",
    "project-05-01.jpg",
    "project-05-02.jpg",
    "project-06-cover.jpg",
    "project-06-01.jpg",
    "project-06-02.jpg",
    "project-07-cover.jpg",
    "project-07-01.jpg",
    "project-07-02.jpg",
    "project-08-cover.jpg",
    "project-08-01.jpg",
    "project-08-02.jpg"
)

$imagePath = "assets/images"
if (-not (Test-Path $imagePath)) {
    New-Item -ItemType Directory -Path $imagePath -Force | Out-Null
    Write-Host "[!] 创建了 images 目录" -ForegroundColor Yellow
}

Write-Host "=== 必需图片（7张） ===" -ForegroundColor Green
$missingRequired = @()
foreach ($img in $required) {
    $fullPath = Join-Path $imagePath $img
    if (Test-Path $fullPath) {
        $size = (Get-Item $fullPath).Length / 1KB
        Write-Host "✅ $img ($size KB)" -ForegroundColor Green
    } else {
        Write-Host "❌ $img (缺失)" -ForegroundColor Red
        $missingRequired += $img
    }
}

Write-Host "`n=== 可选图片（后续项目） ===" -ForegroundColor Blue
$foundOptional = 0
foreach ($img in $optional) {
    $fullPath = Join-Path $imagePath $img
    if (Test-Path $fullPath) {
        $size = (Get-Item $fullPath).Length / 1KB
        Write-Host "✅ $img ($size KB)" -ForegroundColor Green
        $foundOptional++
    }
}

if ($foundOptional -eq 0) {
    Write-Host "ℹ️  暂无可选图片（正常）" -ForegroundColor Gray
}

# 总结
Write-Host "`n=== 状态总结 ===" -ForegroundColor Cyan
$totalExists = (Get-ChildItem $imagePath -File).Count
Write-Host "当前图片总数：$totalExists 张"

if ($missingRequired.Count -gt 0) {
    Write-Host "`n❌ 缺失的必需图片：" -ForegroundColor Red
    $missingRequired | ForEach-Object { Write-Host "  - $_" }
    Write-Host "`n⚠️  请补充以上图片才能正常显示网站" -ForegroundColor Yellow
} else {
    Write-Host "`n✅ 所有必需图片已就位！" -ForegroundColor Green
    Write-Host "现在可以上传 GitHub 并访问 https://yokoo3431.github.io" -ForegroundColor Green
}

Write-Host "`n=== 图片优化建议 ===" -ForegroundColor Magenta
Write-Host "1. 单张图片建议 ≤ 500KB"
Write-Host "2. 推荐压缩工具：TinyPNG.com"
Write-Host "3. 保持一致的宽高比（封面4:3，详情图4:3）"
Write-Host "4. 色彩模式：sRGB"
Write-Host "5. 分辨率：封面1200×900，详情图1600×1200"