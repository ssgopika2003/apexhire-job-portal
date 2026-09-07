$res = Invoke-RestMethod -Uri "http://localhost:8080/api/jobs"
$res | ConvertTo-Json -Depth 5 | Out-File "jobs_output.json"
