import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

// อ่านไฟล์ package.json
const packageJsonPath = resolve('./package.json');
const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));

// ฟังก์ชันในการเพิ่มเวอร์ชั่น
function bumpVersion(version, type = 'patch', preRelease = null) {
    const versionParts = version.split('-');
    const mainVersion = versionParts[0].split('.').map(Number);
    let preReleaseVersion = versionParts[1] || '';

    switch (type) {
        case 'major':
            mainVersion[0] += 1;
            mainVersion[1] = 0;
            mainVersion[2] = 0;
            break;
        case 'minor':
            mainVersion[1] += 1;
            mainVersion[2] = 0;
            break;
        case 'patch':
        default:
            mainVersion[2] += 1;
            break;
    }

    if (preRelease) {
        preReleaseVersion = preRelease;
    } else if (preReleaseVersion) {
        const preParts = preReleaseVersion.split('.');
        preParts[preParts.length - 1] = String(Number(preParts[preParts.length - 1]) + 1);
        preReleaseVersion = preParts.join('.');
    }

    return preReleaseVersion ? `${mainVersion.join('.')}-${preReleaseVersion}` : mainVersion.join('.');
}

// เปลี่ยนเวอร์ชั่น
packageJson.version = bumpVersion(packageJson.version, 'patch', 'beta'); // 'patch' เป็น 'major', 'minor' หรือ 'patch' และ 'beta' เป็น pre-release identifier

// เขียนไฟล์ package.json กลับไป
await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

console.log(`Version bumped to ${packageJson.version}`);