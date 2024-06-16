$envVars = @{}

Get-Content .env | ForEach-Object {
    $parts = $_ -split '=', 2
    if ($parts.Count -eq 2) {
        $name = $parts[0].Trim()
        $value = $parts[1].Trim()
        $envVars[$name] = $value
    }
}

$cmd = "sequelize-auto -o ./src/models -d $($envVars['DATABASE']) -h $($envVars['DBHOST']) -u $($envVars['DBUSER']) -x $($envVars['DBPASS']) -e mysql -l ts"
Write-Host "Executing command: $cmd"
Invoke-Expression $cmd