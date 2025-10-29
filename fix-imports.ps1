# fix-imports-final.ps1
# اصلاح همه importهای نسخه‌دار npm packageها در فولدر src

$srcPath = ".\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include *.ts,*.tsx

foreach ($file in $files) {
    $content = Get-Content $file.FullName

    # حذف هر چیزی شبیه package@version
    $newContent = $content -replace "([a-zA-Z0-9\-_@\/]+)@\d+(\.\d+){0,2}", '$1'

    Set-Content -Path $file.FullName -Value $newContent
    Write-Host "Updated imports in $($file.FullName)"
}

Write-Host "All versioned imports have been fixed!"
