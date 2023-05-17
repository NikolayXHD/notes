#!/usr/bin/bash
status="$(nmcli connection show Smartcat | grep -i 'general.state:\s*activated' | grep -o activated)"
if [ "$status" = "activated" ]
then
	status="up"
else
	status="down"
fi
echo "vpn: $status"
