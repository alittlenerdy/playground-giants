#!/usr/bin/env bash
# House rule, already codified in src/lib/brand.ts under `voice.avoid`:
# no em dashes in published copy.
#
# The rule existed and held on exactly zero pages, because nothing enforced it.
# A 2026-07-26 audit found 51 em dashes rendering across the site. This script
# is the enforcement, and it is the whole difference between a standard and a
# preference.
#
# Scope is deliberately PUBLISHED copy only: page and component source, plus
# MDX posts. Lines that are purely a code comment are skipped, since those are
# internal notes that never reach a reader.
#
# Run manually, or wire into a pre-push hook alongside lint and build.
set -euo pipefail
cd "$(dirname "$0")/.."

hits=$(grep -rn "—" src/ --include="*.tsx" --include="*.ts" --include="*.mdx" 2>/dev/null \
  | grep -vE ':[0-9]+: *(//|\*|\{/\*)' || true)

if [ -n "$hits" ]; then
  echo "🔴 em dash found in published copy:"
  echo "$hits"
  echo
  echo "Replace with a comma, a colon, or a full stop."
  echo "See src/lib/brand.ts -> voice.avoid."
  exit 1
fi

echo "✅ no em dashes in published copy"
